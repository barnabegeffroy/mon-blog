write_data () {
  line=$(grep -n "\-\-\-" $1 | cut -f1 -d: | tail -1)
  cat $1 | head -$(($line-1)) | tail -$(($line-2)) | sed 's/\(.*\): \(.*\)/"\1":"\2",/' >> $2
  content=$(sed -n $(($line+1))',$p' $1 | marked | sed -E ':a;N;$!ba;s/\r{0,1}\n/\\n/g' | sed 's/\"\+/\\\"/g' )
  echo '"contents":"'$content'",' >> $2
}

alt=0
dir=""
out="./src/data.json"
echo [ >$out
tree -J data/* | sed 's/.*directory.*alt.*/\t\t{"alt":[/g' | head -n -3 | 
while read p; do
    case $p in
    *"directory"*)
        dir=$(echo $p | sed 's/.*name\":\"\([a-z/]*\).*/\1/')
        echo { >>$out
        ;;

    '{"alt":[')
        alt=1
        echo '"otheralt":[' >>$out
        ;;

    *"alt.md"*)
        write_data $dir/alt.md $out
        sed -ie '$s/contents/altcontents/' $out
        ;;

    *"appli.md"*)
        write_data $dir/appli.md $out
        sed -ie '$s/contents/appcontents/' $out
        ;;
    
    *"install"*)
        echo '"install": {' >>$out
        write_data $dir/"install.md" $out
        sed -i '$ s/.$//' $out
        echo }, >>$out
        ;;

    *"transition"*)
        echo '"transition": {' >>$out
        write_data $dir/"transition.md" $out
        sed -i '$ s/.$//' $out
        echo }, >>$out
        ;;

    *"ux.md"*)
        echo '"ux": {' >>$out
        write_data $dir/"ux.md" $out
        sed -i '$ s/.$//' $out
        echo } >>$out
        ;;

    *"file"*)
        echo { >>$out
        name=$(echo $p | sed 's/.*name\":\"\([a-z]*.md\).*/\1/')
        write_data $dir/alt/$name $out
        sed -i '$ s/.$//' $out
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
done

echo "}]" >> $out
prettier -w $out 
rm src/data.jsone
rm static/svg/*
svg-sprite --css --css-dest=static --css-common=svg-sprite-icon --ccss static/icons/*.svg -w 120 -h 120
sed -i -E '/dims/,+4d' static/sprite.css
sed -i  '/url/a background-size: 700%;' static/sprite.css
prettier -w static/sprite.css 
mv static/sprite.css src/