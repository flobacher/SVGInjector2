{"version":3,"file":"./svg-injector.min.js","sources":["./svg-injector.js"],"names":["window","document","uniqueClasses","list","split","hash","i","length","out","hasOwnProperty","unshift","join","isFunction","obj","constructor","call","apply","isArray","Object","prototype","toString","svgElemSetClassName","el","newClassNames","curClasses","getAttribute","setAttribute","setFallbackClassNames","element","symbolId","classNames","className","defaultFallbackClassNames","slice","forEach","curClassName","idx","replace","removeFallbackClassNames","fallbackClassNames","curClassNames","indexOf","onlyInjectVisiblePart","removeStylesClass","fallbackClassName","prefixStyleTags","removeAllStyles","svgNS","xlinkNS","defaultRemoveStylesClassName","isLocal","location","protocol","hasSvgSupport","implementation","hasFeature","Array","fn","scope","this","TypeError","len","svgCache","injectCount","injectedElements","requestQueue","ranScripts","copyAttributes","svgElemSource","svgElemTarget","attributesToIgnore","curAttr","attributes","item","name","value","cloneSymbolAsSVG","svgSymbol","svg","createElementNS","childNodes","child","appendChild","cloneNode","doPrefixStyleTags","styleTag","srcArr","origPrefixClassName","regex","RegExp","newPrefixClassName","textContent","getClassList","svgToCheck","curClassAttr","cloneSvg","sourceSvg","fragId","svgElem","newSVG","viewBox","viewBoxAttr","symbolAttributesToFind","curClassList","setViewboxOnNewSVG","symbolElem","undefined","getElementById","SVGSymbolElement","SVGViewElement","selector","Math","abs","x","y","querySelector","SVGSVGElement","prop","removeAttribute","SVGUseElement","referencedSymbol","getAttributeNS","substr","push","queueRequest","callback","fileName","fragmentId","processRequestQueue","url","index","setTimeout","loadSvg","urlArr","XMLHttpRequest","httpRequest","onreadystatechange","readyState","status","responseXML","statusText","Document","documentElement","DOMParser","Function","xmlDoc","parser","parseFromString","responseText","e","getElementsByTagName","open","overrideMimeType","send","injectElement","evalScripts","pngFallback","fallbackUrl","imgUrl","imgUrlSplitByFId","test","perElementFallback","pop","imgId","imgTitle","classMerge","concat","imgStyle","imgData","filter","at","dataAttr","newClipPathName","clipPaths","querySelectorAll","g","clipPathsLen","id","usingClipPath","h","usingClipPathLen","newMaskName","masks","masksLen","usingMask","j","usingMaskLen","script","scriptType","scripts","scriptsToEval","k","scriptsLen","innerText","removeChild","l","scriptsToEvalLen","styleTags","svgClassList","parentNode","replaceChild","SVGInjector","elements","options","done","forceFallbacks","eachCallback","each","htmlElement","css","head","style","createElement","type","styleSheet","cssText","createTextNode","elementsLoaded","module","exports","define","amd"],"mappings":"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"}