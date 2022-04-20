mkdir tmp
tree -J data/* >tmp/tree.json
sed -i 's/.*directory.*alt.*/\t\t{"alt":[/g' tmp/tree.json
sed -i 'N;$!P;D' tmp/tree.json
echo }] >>tmp/tree.json

alt=0
dir=""
out="tmp/file.json"
data="tmp/data.json"
echo [ >$out
while read p; do
    case $p in
    '{"alt":[')
        alt=1
        echo '"otheralt":[' >>$out
        ;;

    *"directory"*)
        dir=$(echo $p | sed 's/.*name\":\"\([a-z/]*\).*/\1/')
        echo { >>$out

        ;;
    *"alt.md"*)
        markdown-json -p "alt.md" -s $dir
        grep "altname" $data >>$out
        grep "altfile" $data >>$out
        grep "contents" $data >>$out
        sed -ie '$s/contents/altcontents/' $out
        ;;
    *"appli.md"*)
        markdown-json -p "appli.md" -s $dir
        grep "appname" $data >>$out
        grep "theme" $data >>$out
        grep "contents" $data >>$out
        sed -ie '$s/contents/appcontents/' $out
        grep "appfile" $data >>$out
        ;;
    *"install"*)
        echo '"install": {' >>$out
        markdown-json -p "install.md" -s $dir
        grep "rating" $data >>$out
        grep "contents" $data >>$out
        echo }, >>$out
        ;;
    *"transition"*)
        echo '"transition": {' >>$out
        markdown-json -p "transition.md" -s $dir
        grep "rating" $data >>$out
        grep "contents" $data >>$out
        echo }, >>$out
        ;;
    *"ux.md"*)
        echo '"ux": {' >>$out
        markdown-json -p "ux.md" -s $dir
        grep "rating" $data >>$out
        grep "contents" $data >>$out
        echo } >>$out
        ;;
    *"file"*)
        echo { >>$out
        name=$(echo $p | sed 's/.*name\":\"\([a-z]*.md\).*/\1/')
        markdown-json -p $name -s $dir/alt
        grep "appname" $data >>$out
        grep "contents" $data >>$out
        echo }, >>$out
        ;;
    "]},")
        if [ $alt -eq 0 ]; then
            echo }, >>$out
        else
            alt=0
            sed -ie '$s/},/}],/' $out

        fi
        ;;
    esac
done <tmp/tree.json

sed -ie '$s/},/}]/' $out

prettier tmp/file.json >./src/data.json
rm -r tmp
