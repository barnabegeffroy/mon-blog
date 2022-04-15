import { c as create_ssr_component, e as escape$1, a as add_attribute, b as each, v as validate_component, d as compute_rest_props, m as missing_component, g as getContext, f as createEventDispatcher, s as setContext } from "../../chunks/index-7f55a65f.js";
import { b as base } from "../../chunks/paths-396f020f.js";
var isNumber = (n) => typeof n === "number" && n === Number(n) && Number.isFinite(n);
var makeUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);
var Star_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-7nhlqv{width:var(--width);height:var(--height);margin-right:2px}",
  map: null
};
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { full } = $$props;
  let { id } = $$props;
  let { config = {} } = $$props;
  const fullColor = config.fullColor || "#ffcf00";
  const emptyColor = config.emptyColor || "#7f7f7f";
  let width = config.size && isNumber(config.size) ? config.size : 20;
  width = width + "px";
  const height = width;
  if ($$props.full === void 0 && $$bindings.full && full !== void 0)
    $$bindings.full(full);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  $$result.css.add(css$4);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"249.748"}" viewBox="${"0 -10 187.673 179.503"}" height="${"239.338"}" style="${"--width:" + escape$1(width) + ";--height:" + escape$1(height)}" class="${"svelte-7nhlqv"}">${full !== 1 && full !== 0 ? `<defs><linearGradient id="${"grad-" + escape$1(id)}" x1="${"0%"}" y1="${"0%"}" x2="${"100%"}" y2="${"0%"}"><stop offset="${"0%"}" style="${"stop-color:" + escape$1(fullColor) + ";stop-opacity:1"}"></stop><stop offset="${escape$1(full * 100) + "%"}" style="${"stop-color:" + escape$1(fullColor) + ";stop-opacity:1"}"></stop><stop offset="${escape$1(full * 100) + "%"}" style="${"stop-color:" + escape$1(emptyColor) + ";stop-opacity:1"}"></stop></linearGradient></defs>` : ``}<path${add_attribute("fill", full === 1 ? fullColor : full === 0 ? emptyColor : `url(#grad-${id})`, 0)} d="${"M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"}"></path></svg>`;
});
var StarRating_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-g1srw1{display:flex;margin-bottom:14px}span.svelte-g1srw1{color:#7f7f7f;line-height:1;align-self:center;margin-left:8px}",
  map: null
};
const StarRating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let full;
  let half;
  let empty;
  let fullArr;
  let halfArr;
  let emptyArr;
  let stars;
  let { id = makeUniqueId() } = $$props;
  let { rating } = $$props;
  let { style = "" } = $$props;
  let { config = {} } = $$props;
  let fontSize = config.size && isNumber(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  $$result.css.add(css$3);
  {
    if (!isNumber(rating) || rating < 0 || rating > 5) {
      throw new Error("rating value is not valid! \u{1F645}\u200D\u2640\uFE0F");
    }
  }
  full = Math.floor(rating);
  half = Math.round((rating - full) * 100) / 100;
  empty = Math.floor(5 - rating);
  fullArr = Array(full).fill(1);
  halfArr = half !== 0 ? [half] : [];
  emptyArr = Array(empty).fill(0);
  stars = fullArr.concat(halfArr).concat(emptyArr);
  return `<div${add_attribute("style", style, 0)} class="${"svelte-g1srw1"}">${each(stars, (star) => {
    return `${validate_component(Star, "Star").$$render($$result, { id, full: star, config }, {}, {})}`;
  })}
  ${config.showText ? `<span style="${"font-size:" + escape$1(fontSize) + "px"}" class="${"svelte-g1srw1"}">${escape$1(rating)}</span>` : ``}
</div>`;
});
function supressWarnings() {
  const origWarn = console.warn;
  console.warn = (message) => {
    if (message.includes("unknown prop"))
      return;
    if (message.includes("unexpected slot"))
      return;
    origWarn(message);
  };
}
const Parser$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "tokens", "header", "rows", "ordered", "renderers"]);
  let { type = void 0 } = $$props;
  let { tokens = void 0 } = $$props;
  let { header = void 0 } = $$props;
  let { rows = void 0 } = $$props;
  let { ordered = false } = $$props;
  let { renderers } = $$props;
  supressWarnings();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  return `${!type ? `${each(tokens, (token) => {
    return `${validate_component(Parser$1, "svelte:self").$$render($$result, Object.assign(token, { renderers }), {}, {})}`;
  })}` : `${renderers[type] ? `${type === "table" ? `${validate_component(renderers.table || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(renderers.tablehead || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => {
              return `${each(header, (headerItem, i) => {
                return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render($$result, {
                  header: true,
                  align: $$restProps.align[i] || "center"
                }, {}, {
                  default: () => {
                    return `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: headerItem.tokens, renderers }, {}, {})}
              `;
                  }
                })}`;
              })}`;
            }
          })}`;
        }
      })}
        ${validate_component(renderers.tablebody || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => {
                return `${each(row, (cells, i) => {
                  return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render($$result, {
                    header: false,
                    align: $$restProps.align[i] || "center"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: cells.tokens, renderers }, {}, {})}
                `;
                    }
                  })}`;
                })}
            `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}` : `${type === "list" ? `${ordered ? `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.orderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign(item), {}, {
          default: () => {
            return `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `;
          }
        })}`;
      })}`;
    }
  })}` : `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.unorderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign(item), {}, {
          default: () => {
            return `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `;
          }
        })}`;
      })}`;
    }
  })}`}` : `${validate_component(renderers[type] || missing_component, "svelte:component").$$render($$result, Object.assign($$restProps), {}, {
    default: () => {
      return `${tokens ? `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${escape$1($$restProps.raw)}`}`;
    }
  })}`}`}` : ``}`}`;
});
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
let defaults = getDefaults();
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base2, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base2 && !originIndependentUrl.test(href)) {
    href = resolveUrl(base2, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base2, href) {
  if (!baseUrls[" " + base2]) {
    if (justDomain.test(base2)) {
      baseUrls[" " + base2] = base2 + "/";
    } else {
      baseUrls[" " + base2] = rtrim(base2, "/", true);
    }
  }
  base2 = baseUrls[" " + base2];
  const relativeBase = base2.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base2.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base2.replace(domain, "$1") + href;
  } else {
    return base2 + href;
  }
}
const noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i = 1, target, key2;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key2 in target) {
      if (Object.prototype.hasOwnProperty.call(target, key2)) {
        obj[key2] = target[key2];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.substr(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  } else {
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape(text)
    };
  }
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *> ?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?: [^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += "\n" + line.slice(indent);
            } else if (!blankLine) {
              itemContents += "\n" + line;
            } else {
              break;
            }
            if (!blankLine && !line.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter((t) => t.type === "space");
        const hasMultipleLineBreaks = spacers.every((t) => {
          const chars = t.raw.split("");
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === "\n") {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          list.loose = true;
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = src.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text2,
            tokens: this.lexer.inlineTokens(text2, [])
          };
        }
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text;
        } else {
          href = text;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/^ +$/gm, "");
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  }
  html(html) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      return "<h" + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + "</h" + level + ">\n";
    }
    return "<h" + level + ">" + text + "</h" + level + ">\n";
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return "<li>" + text + "</li>\n";
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return "<p>" + text + "</p>\n";
  }
  table(header, body) {
    if (body)
      body = "<tbody>" + body + "</tbody>";
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return "<tr>\n" + content + "</tr>\n";
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? "<" + type + ' align="' + flags.align + '">' : "<" + type + ">";
    return tag + content + "</" + type + ">\n";
  }
  strong(text) {
    return "<strong>" + text + "</strong>";
  }
  em(text) {
    return "<em>" + text + "</em>";
  }
  codespan(text) {
    return "<code>" + text + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return "<del>" + text + "</del>";
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
}
class TextRenderer {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}
class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), { header: true, align: token.align[j] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
Parser.parse;
Lexer.lex;
const key = {};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let { depth } = $$props;
  let { raw } = $$props;
  let { text } = $$props;
  const { slug, getOptions } = getContext(key);
  const options = getOptions();
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  return `${depth === 1 ? `<h1${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${escape$1(raw)}`}`}`}`}`}`}`;
});
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>${slots.default ? slots.default({}) : ``}</p>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { raw } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  let { text = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${add_attribute("src", href, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", text, 0)}>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<em>${slots.default ? slots.default({}) : ``}</em>`;
});
const Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<del>${slots.default ? slots.default({}) : ``}</del>`;
});
const Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { raw } = $$props;
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `<code>${escape$1(raw.replace(/`/g, ""))}</code>`;
});
const Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table>${slots.default ? slots.default({}) : ``}</table>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { align } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  return `${header ? `<th${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ordered } = $$props;
  let { start } = $$props;
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `${ordered ? `<ol${add_attribute("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { text } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<pre${add_attribute("class", lang, 0)}><code>${escape$1(text)}</code></pre>`;
});
const Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>${slots.default ? slots.default({}) : ``}`;
});
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
const SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slugger;
  let combinedOptions;
  let combinedRenderers;
  let { source = "" } = $$props;
  let { renderers = {} } = $$props;
  let { options = {} } = $$props;
  let { isInline = false } = $$props;
  const dispatch = createEventDispatcher();
  let tokens;
  let lexer;
  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = { ...defaultOptions, ...options };
  {
    {
      lexer = new Lexer(combinedOptions);
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
      dispatch("parsed", { tokens });
    }
  }
  combinedRenderers = { ...defaultRenderers, ...renderers };
  return `${validate_component(Parser$1, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
});
var Appli_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".app-body.svelte-18hsday.svelte-18hsday{display:flex;flex-direction:column;align-items:center;margin:2%}.app-name.svelte-18hsday.svelte-18hsday{margin-top:1%}.target.svelte-18hsday.svelte-18hsday{display:flex;justify-content:center;border-radius:1.5em;position:relative;text-align:center;width:120px;height:120px;transform:translate3d(0, 0, 0);z-index:0;background-color:white}.modal.svelte-18hsday.svelte-18hsday{display:var(--display);position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.4)}.modal-content.svelte-18hsday.svelte-18hsday{position:relative;background-color:#fefefe;margin:auto;margin-bottom:10%;padding:0;border:1px solid #888;width:50%;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);-webkit-animation-name:svelte-18hsday-animatetop;-webkit-animation-duration:0.4s;animation-name:svelte-18hsday-animatetop;animation-duration:0.4s}@-webkit-keyframes svelte-18hsday-animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes svelte-18hsday-animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}.close.svelte-18hsday.svelte-18hsday{color:white;float:right;font-size:42px;font-weight:bold}.close.svelte-18hsday.svelte-18hsday:hover,.close.svelte-18hsday.svelte-18hsday:focus{color:#428542;text-decoration:none;cursor:pointer}.modal-header.svelte-18hsday.svelte-18hsday{padding:5% 3% 0.3% 3%;background-color:#5cb85c;color:white}.banner.svelte-18hsday.svelte-18hsday{display:flex;justify-content:center;text-align:center;color:white;font-weight:800;font-size:xx-large}.modal-body.svelte-18hsday.svelte-18hsday{padding:2px 16px}.modal-footer.svelte-18hsday.svelte-18hsday{padding:2px 16px;background-color:#5cb85c;color:white}.modal-app-icon.svelte-18hsday>h4.svelte-18hsday{margin-top:0%;margin-bottom:5%;text-align:center}.modal-app-icon.svelte-18hsday>img.svelte-18hsday{height:100px;background-color:white;width:auto;border-radius:1.5em}.arrow.svelte-18hsday.svelte-18hsday{font-size:90px;display:flex;align-items:center}.transition.svelte-18hsday.svelte-18hsday{justify-content:center;display:flex}.tech.svelte-18hsday.svelte-18hsday{display:flex}.part.svelte-18hsday.svelte-18hsday{flex:1;padding:2%}.rating.svelte-18hsday.svelte-18hsday{font-weight:700;font-size:large;display:flex;flex-wrap:wrap}hr.svelte-18hsday.svelte-18hsday{border:1px solid #5cb85c}@media(min-width: 1600px){.rating.svelte-18hsday>p.svelte-18hsday{flex:1;margin:0%}.rating.svelte-18hsday>span.svelte-18hsday{flex:1}}@media(max-width: 1600px){.modal-content.svelte-18hsday.svelte-18hsday{margin-bottom:30%}.tech.svelte-18hsday.svelte-18hsday{flex-direction:column}hr.svelte-18hsday.svelte-18hsday{width:90%}}@media(max-width: 775px){.target.svelte-18hsday.svelte-18hsday{width:90px;height:90px}.modal-content.svelte-18hsday.svelte-18hsday{width:80%}.modal-app-icon.svelte-18hsday>img.svelte-18hsday{height:80px;width:auto}.arrow.svelte-18hsday.svelte-18hsday{font-size:70px}}",
  map: null
};
const Appli = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { appli } = $$props;
  let { showModal } = $$props;
  let name = appli.name;
  let file = appli.file;
  let element;
  if ($$props.appli === void 0 && $$bindings.appli && appli !== void 0)
    $$bindings.appli(appli);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css$2);
  return `<div class="${"app-body svelte-18hsday"}"${add_attribute("this", element, 0)}><img${add_attribute("src", base + "/" + file, 0)} class="${"target svelte-18hsday"}"${add_attribute("alt", appli.name + "logo", 0)}>
	<h4 class="${"app-name svelte-18hsday"}">${escape$1(name)}</h4></div>


<div class="${"modal svelte-18hsday"}" style="${"--display: " + escape$1("none") + ";"}"><div class="${"modal-content svelte-18hsday"}"><div class="${"modal-header svelte-18hsday"}"><span class="${"close svelte-18hsday"}">\xD7</span>
			<div class="${"transition svelte-18hsday"}"><div class="${"modal-app-icon svelte-18hsday"}"><img${add_attribute("src", base + "/" + appli.file, 0)} alt="${""}" class="${"svelte-18hsday"}">
					<h4 class="${"svelte-18hsday"}">${escape$1(appli.name)}</h4></div>
				<span class="${"arrow svelte-18hsday"}">\u2192</span>
				<div class="${"modal-app-icon svelte-18hsday"}"><img${add_attribute("src", base + "/" + appli.altfile, 0)} alt="${""}" class="${"svelte-18hsday"}">
					<h4 class="${"svelte-18hsday"}">${escape$1(appli.altname)}</h4></div></div>
			<h2 class="${"banner svelte-18hsday"}">${escape$1(appli.theme)}</h2></div>
		<div class="${"modal-body svelte-18hsday"}"><h3>${escape$1(appli.name)}</h3>
			${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: appli.appdescription }, {}, {})}
			<h3>${escape$1(appli.altname)}</h3>
			${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: appli.altdescription }, {}, {})}</div>
		<div class="${"modal-footer svelte-18hsday"}"><h3>Fiche Technique</h3></div>
		<div class="${"tech svelte-18hsday"}"><div class="${"part svelte-18hsday"}"><div class="${"rating svelte-18hsday"}"><p class="${"svelte-18hsday"}">Exp\xE9rience :</p>
					<span class="${"svelte-18hsday"}">${validate_component(StarRating, "StarRating").$$render($$result, { rating: appli.ux }, {}, {})}</span></div>
				${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: appli.uxdescription }, {}, {})}</div>
			<hr class="${"svelte-18hsday"}">
			<div class="${"part svelte-18hsday"}"><div class="${"rating svelte-18hsday"}"><p class="${"svelte-18hsday"}">Installation :</p>
					<span class="${"svelte-18hsday"}">${validate_component(StarRating, "StarRating").$$render($$result, { rating: appli.instal }, {}, {})}</span>
					${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: appli.installdescription }, {}, {})}</div></div>
			<hr class="${"svelte-18hsday"}">
			<div class="${"part svelte-18hsday"}"><div class="${"rating svelte-18hsday"}"><p class="${"svelte-18hsday"}">Transition :</p>
					<span class="${"svelte-18hsday"}">${validate_component(StarRating, "StarRating").$$render($$result, { rating: appli.transition }, {}, {})}</span></div>
				${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: appli.transitiondescription }, {}, {})}</div></div>
		${appli.otheralt ? `<div class="${"modal-footer svelte-18hsday"}"><h3>D&#39;autres alternatives</h3></div>
			<div class="${"modal-body svelte-18hsday"}">${each(appli.otheralt, (alt) => {
    return `<h4>${escape$1(alt.name)}</h4>
					${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: alt.text }, {}, {})}`;
  })}</div>` : ``}</div>
</div>`;
});
var Switch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".switch.svelte-1ijwmwi.svelte-1ijwmwi{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-1ijwmwi input.svelte-1ijwmwi{opacity:0;width:0;height:0}.slider.svelte-1ijwmwi.svelte-1ijwmwi{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;border-radius:34px}.slider.svelte-1ijwmwi.svelte-1ijwmwi:before{position:absolute;content:'';height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%}input.svelte-1ijwmwi:checked+.slider.svelte-1ijwmwi{background-color:#5cb85c}input.svelte-1ijwmwi:checked+.slider.svelte-1ijwmwi{box-shadow:0 0 1px #5cb85c}input.svelte-1ijwmwi:checked+.slider.svelte-1ijwmwi:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}",
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = true } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$1);
  return `<label class="${"switch svelte-1ijwmwi"}"><input type="${"checkbox"}" class="${"svelte-1ijwmwi"}"${add_attribute("checked", checked, 1)}>
	<span class="${"slider svelte-1ijwmwi"}"></span>
</label>`;
});
var applis = [
  {
    name: "WhatsApp",
    theme: "Messageries instantann\xE9es",
    file: "whatsapp.svg",
    altname: "Signal",
    altfile: "signal.svg",
    appdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    altdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    ux: 4.5,
    uxdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    instal: 5,
    installdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    transition: 2,
    transitiondescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    otheralt: [
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      },
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      }
    ]
  },
  {
    name: "Chrome",
    theme: "Navigateurs web",
    file: "chrome.svg",
    altname: "Firefox",
    altfile: "firefox.svg",
    appdescription: `Chrome est un navigateur  **propri\xE9taire** d\xE9velopp\xE9 par **Google** qui fonctionne sur tous les syst\xE8mes d'exploitations (Windows, Mac, Linux, iOS, Android...). C'est le navigateur le plus utilis\xE9 dans le monde avec [66% des parts du march\xE9](https://fr.wikipedia.org/wiki/Parts_de_march%C3%A9_des_navigateurs_web).<br /> Comme la plupart des outils de Google, ce logiciel est tr\xE8s gourmant des donn\xE9es personnelles. L'entreprise a nottament \xE9t\xE9 poursuivi en justice car son mode de navigation priv\xE9e, le mode "incognito", collectait les donn\xE9es personnelles. L'entreprise profite \xE9galement de sa position dominante (notamment sur les t\xE9l\xE9phones Android) pour imposer ce navigateur. Elle d'ailleurs a \xE9t\xE9 [condamn\xE9e \xE0 une amende de 4,3 millidards par l'UE](https://www.ouest-france.fr/high-tech/google/google-conteste-une-amende-de-4-3-milliards-devant-la-justice-de-l-ue-729fc706-1fb8-11ec-8af0-329508a32afd) pour pratique anticoncurrentielle. De mani\xE8re g\xE9n\xE9ral Chrome collecte [la plupart des donn\xE9es](https://nitter.dark.fail/DuckDuckGo/status/1371509053613084679?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1371509053613084679%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.android-mt.com%2Fnews%2Fcomment-google-chrome-utilise-vos-donnees-et-vie-privee%2F116614%2F) : informations financi\xE8res, localisation, contacts, historique de recherche, historique de navigation, identifiants, donn\xE9es d'utilisation, et tant d'autres.`,
    altdescription: "",
    ux: 5,
    uxdescription: "",
    instal: 5,
    installdescription: "",
    transition: 5,
    transitiondescription: "",
    otheralt: [
      {
        name: "Midori",
        text: "Midori est un navigateur [**open source**](https://gitlab.com/midori-web) d\xE9velopp\xE9 par Astian. Il est consid\xE9r\xE9 l'un des navigateurs les plus l\xE9gers, rapides et minimals. Il s'adresse davatange aux utilisateurs exp\xE9riment\xE9s avec une personnalisation qui n\xE9cessite davatange de ressources que de simples installations d'extensions. Il est disponible sur tous les syst\xE8mes sauf iOS."
      },
      {
        name: "Tor Browser",
        text: "Tor Browser est un navigateur [**open source**](https://gitweb.torproject.org/tor-browser.git/) d\xE9velopp\xE9 par The Tor Project. Il est bas\xE9 sur Firefox et le r\xE9seau Tor. Ce navigateur permet une navigation hautement s\xE9curis\xE9e avec un anonymat de l'origine de connexions, outils contre le pistage par empreinte num\xE9rique unique des dimensions de l\u2019\xE9cran... Toutefois Tor Browser ne semble pas adapt\xE9e pour une navigation quotidienne (pas d'historique, de cookies...). L'anonymat des connexions est \xE9galement co\xFBteux en \xE9nergie. Ce navigateur peut toutefois remplacer le mode navigation priv\xE9e d'un navigateur standard et apporter un anonymat beaucoup plus robuste."
      }
    ]
  },
  {
    name: "Maps",
    theme: "Navigation",
    file: "google-maps.svg",
    altname: "Osmand",
    altfile: "osmand.svg",
    appdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    altdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    ux: 4.5,
    uxdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    instal: 5,
    installdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    transition: 2,
    transitiondescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    otheralt: [
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      },
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      }
    ]
  },
  {
    name: "Zoom",
    theme: "Visioconf\xE9rence",
    file: "zoom.svg",
    altname: "Jitsi",
    altfile: "jitsi.svg",
    appdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    altdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    ux: 4.5,
    uxdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    instal: 5,
    installdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    transition: 2,
    transitiondescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    otheralt: [
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      },
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      }
    ]
  },
  {
    name: "Word",
    theme: "Suite bureautique",
    file: "word.svg",
    altname: "LibreOffice",
    altfile: "libreoffice.svg",
    appdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    altdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    ux: 4.5,
    uxdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    instal: 5,
    installdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    transition: 2,
    transitiondescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    otheralt: [
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      },
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      }
    ]
  },
  {
    name: "Outlook",
    theme: "Gestionnaire d'e-mails",
    file: "outlook.svg",
    altname: "Thunderbird",
    altfile: "thunderbird.svg",
    appdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    altdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    ux: 4.5,
    uxdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    instal: 5,
    installdescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    transition: 2,
    transitiondescription: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro.",
    otheralt: [
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      },
      {
        name: "Telegram",
        text: "Honore sive, laevum venisse variat en rates, membris. Primo invocat *litorei* dolores, nam fore saepe et sola. Inpervius est resolvit finiat moderantur **forti toto inmemores** utrumque pia, tibi tot quae [voluntas](http://gratia.net/casuque), viva iam. Habet limina, Caphereus laedam, et minus iamque Fluctibus furiosior dignos *unus*, horrida, uvae igne! Pertulit [commissaque](http://hinc-votum.com/flumina.html) distinctus lumine decerpserat curvamine secunda et suas carmina salutent vivitur ostro."
      }
    ]
  }
];
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1rybi8i.svelte-1rybi8i{justify-content:center;display:flex;flex-wrap:wrap;position:relative;overflow:hidden}.switch.svelte-1rybi8i.svelte-1rybi8i{display:flex}p.svelte-1rybi8i.svelte-1rybi8i{font-size:x-large}.switch.svelte-1rybi8i>p.svelte-1rybi8i{margin:0% 2% 3% 0%}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = true;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h1>Les alternatives aux GAFAM</h1>
<p class="${"svelte-1rybi8i"}">Cliquez sur les applications pour d\xE9couvrir leur alternative !</p>
<div class="${"switch svelte-1rybi8i"}"><p class="${"svelte-1rybi8i"}">Activer les descriptions :</p>
	${validate_component(Switch, "Switch").$$render($$result, { checked: showModal }, {
      checked: ($$value) => {
        showModal = $$value;
        $$settled = false;
      }
    }, {})}</div>

<div class="${"container svelte-1rybi8i"}">${each(applis, (appli) => {
      return `${validate_component(Appli, "Appli").$$render($$result, { appli, showModal }, {}, {})}`;
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default, prerender };
