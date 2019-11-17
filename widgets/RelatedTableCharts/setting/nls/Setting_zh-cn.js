// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"dijit/_editor/nls/commands":{bold:"\u7c97\u4f53",copy:"\u590d\u5236",cut:"\u526a\u5207","delete":"\u5220\u9664",indent:"\u589e\u52a0\u7f29\u8fdb",insertHorizontalRule:"\u6c34\u5e73\u7ebf",insertOrderedList:"\u7f16\u53f7\u5217\u8868",insertUnorderedList:"\u7b26\u53f7\u5217\u8868",italic:"\u659c\u4f53",justifyCenter:"\u5c45\u4e2d",justifyFull:"\u5bf9\u9f50",justifyLeft:"\u5de6\u5bf9\u9f50",justifyRight:"\u53f3\u5bf9\u9f50",outdent:"\u51cf\u5c11\u7f29\u8fdb",paste:"\u7c98\u8d34",redo:"\u91cd\u505a",
removeFormat:"\u9664\u53bb\u683c\u5f0f",selectAll:"\u5168\u9009",strikethrough:"\u5220\u9664\u7ebf",subscript:"\u4e0b\u6807",superscript:"\u4e0a\u6807",underline:"\u4e0b\u5212\u7ebf",undo:"\u64a4\u9500",unlink:"\u9664\u53bb\u94fe\u63a5",createLink:"\u521b\u5efa\u94fe\u63a5",toggleDir:"\u5207\u6362\u65b9\u5411",insertImage:"\u63d2\u5165\u56fe\u50cf",insertTable:"\u63d2\u5165/\u7f16\u8f91\u8868",toggleTableBorder:"\u5207\u6362\u8868\u8fb9\u6846",deleteTable:"\u5220\u9664\u8868",tableProp:"\u8868\u5c5e\u6027",
htmlToggle:"HTML \u6e90\u4ee3\u7801",foreColor:"\u524d\u666f\u8272",hiliteColor:"\u80cc\u666f\u8272",plainFormatBlock:"\u6bb5\u843d\u6837\u5f0f",formatBlock:"\u6bb5\u843d\u6837\u5f0f",fontSize:"\u5b57\u4f53\u5927\u5c0f",fontName:"\u5b57\u4f53\u540d\u79f0",tabIndent:"\u5236\u8868\u7b26\u7f29\u8fdb",fullScreen:"\u5207\u6362\u5168\u5c4f",viewSource:"\u67e5\u770b HTML \u6e90\u4ee3\u7801",print:"\u6253\u5370",newPage:"\u65b0\u5efa\u9875\u9762",systemShortcut:'\u53ea\u80fd\u901a\u8fc7\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e\u5728\u6d4f\u89c8\u5668\u4e2d\u6267\u884c "${0}" \u64cd\u4f5c\u3002\u8bf7\u4f7f\u7528 ${1}\u3002',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u5927\u5c0f",fontName:"\u5b57\u4f53",formatBlock:"\u683c\u5f0f",serif:"\u6709\u886c\u7ebf","sans-serif":"\u65e0\u886c\u7ebf",monospace:"\u7b49\u5bbd\u5b57\u4f53",cursive:"\u8349\u4e66",fantasy:"\u865a\u7ebf",noFormat:"\u65e0",p:"\u6bb5\u843d",h1:"\u6807\u9898",h2:"\u526f\u6807\u9898",h3:"\u4e8c\u7ea7\u5b50\u6807\u9898",pre:"\u9884\u8bbe\u6709\u683c\u5f0f\u7684",1:"XX \u5c0f\u53f7",2:"X \u5c0f\u53f7",
3:"\u5c0f\u53f7",4:"\u4e2d\u53f7",5:"\u5927\u53f7",6:"X \u5927\u53f7",7:"XX \u5927\u53f7",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u9884\u89c8",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u67e5\u627e\uff1a",findTooltip:"\u8f93\u5165\u8981\u67e5\u627e\u7684\u6587\u672c",replaceLabel:"\u66ff\u6362\u4e3a\uff1a",replaceTooltip:"\u8f93\u5165\u8981\u66ff\u6362\u4e3a\u7684\u6587\u672c",findReplace:"\u67e5\u627e\u548c\u66ff\u6362",matchCase:"\u5927\u5c0f\u5199\u5339\u914d",
matchCaseTooltip:"\u5927\u5c0f\u5199\u5339\u914d",backwards:"\u8fd4\u56de",backwardsTooltip:"\u5411\u540e\u641c\u7d22\u6587\u672c",replaceAllButton:"\u5168\u90e8\u66ff\u6362",replaceAllButtonTooltip:"\u66ff\u6362\u6240\u6709\u6587\u672c",findButton:"\u67e5\u627e",findButtonTooltip:"\u67e5\u627e\u6587\u672c",replaceButton:"\u66ff\u6362",replaceButtonTooltip:"\u66ff\u6362\u6587\u672c",replaceDialogText:"\u5df2\u66ff\u6362 ${0} \u5904\u3002",eofDialogText:"\u4e0a\u6b21\u51fa\u73b0 ${0}",eofDialogTextFind:"\u627e\u5230",
eofDialogTextReplace:"\u5df2\u66ff\u6362",_localized:{}},"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u4ece Word \u4e2d\u7c98\u8d34",instructions:"\u5c06\u5185\u5bb9\u4ece Word \u7c98\u8d34\u5230\u4ee5\u4e0b\u6587\u672c\u6846\u3002\u5982\u679c\u5bf9\u63d2\u5165\u7684\u5185\u5bb9\u6ee1\u610f\uff0c\u8bf7\u6309\u201c\u7c98\u8d34\u201d\u6309\u94ae\u3002\u8981\u4e2d\u6b62\u63d2\u5165\u6587\u672c\uff0c\u8bf7\u6309\u201c\u53d6\u6d88\u201d\u6309\u94ae\u3002",_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u63d2\u5165\u951a\u70b9",
title:"\u951a\u70b9\u5c5e\u6027",anchor:"\u540d\u79f0\uff1a",text:"\u8bf4\u660e\uff1a",set:"\u96c6",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5757\u5f15\u7528",_localized:{}},"widgets/RelatedTableCharts/setting/nls/strings":{chartSettingLabel:"\u56fe\u8868\u8bbe\u7f6e",addNewLabel:"\u65b0\u589e",generalSettingLabel:"\u5e38\u89c4\u8bbe\u7f6e",searchSourceSettingLabel:"\u641c\u7d22\u6e90\u8bbe\u7f6e",layerChooser:{title:"\u9009\u62e9\u8981\u5236\u8868\u7684\u56fe\u5c42",
selectPolygonLayerLabel:"\u9009\u62e9\u56fe\u5c42",selectPolygonLayerHintText:"\u63d0\u793a: \u5982\u679c\u914d\u7f6e\u591a\u4e2a\u56fe\u8868\uff0c\u5219\u56fe\u5c42\u5fc5\u987b\u4e3a\u76f8\u540c\u7684\u51e0\u4f55\u7c7b\u578b",selectRelatedTableLayerLabel:"\u9009\u62e9\u56fe\u5c42\u7684\u76f8\u5173\u8868",selectRelatedTableLayerHintText:"\u63d0\u793a: \u4ec5\u663e\u793a\u542b\u6570\u503c\u5b57\u6bb5\u7684\u8868",errorInSelectingPolygonLayer:"\u8bf7\u9009\u62e9\u5177\u6709\u76f8\u5173\u70b9\u56fe\u5c42\u7684\u56fe\u5c42\u3002",
errorInSelectingRelatedLayer:"\u8bf7\u9009\u62e9\u56fe\u5c42\u7684\u6709\u6548\u76f8\u5173\u8868/\u56fe\u5c42\u3002",polygonLayerNotHavingRelationships:"\u6240\u9009\u56fe\u5c42\u4e0d\u5177\u6709\u4efb\u4f55\u76f8\u5173\u8868/\u56fe\u5c42\u3002"},ChartSetting:{sectionTitle:"\u7ae0\u8282\u6807\u9898",sectionTitleHintText:"\u63d0\u793a: \u663e\u793a\u5728\u7ae0\u8282\u9875\u7709\u6807\u9898\u4e2d",chartTitle:"\u56fe\u8868\u6807\u9898",chartTitleHintText:"\u63d0\u793a: \u5c45\u4e2d\u663e\u793a\u5728\u56fe\u8868\u9876\u90e8",
chartDescription:"\u8bf4\u660e",chartDescriptionHintText:"\u63d0\u793a: \u663e\u793a\u5728\u56fe\u8868\u4e0b\u65b9",chartType:"\u56fe\u8868\u7c7b\u578b",barChart:"\u6761\u5f62\u56fe",pieChart:"\u997c\u56fe",polarChart:"\u6781\u5750\u6807\u56fe",lineChart:"\u6298\u7ebf\u56fe",dataSeriesField:"\u6570\u636e\u7cfb\u5217\u5b57\u6bb5",lineDataSeriesField:"\u503c\u5b57\u6bb5",labelField:"\u6807\u6ce8\u5b57\u6bb5",lineLabelSeriesField:"\u987a\u5e8f\u5b57\u6bb5",chartColor:"\u56fe\u8868\u989c\u8272",singleColor:"\u5355\u8272",
colorByTheme:"\u6309\u4e3b\u9898\u5206\u7c7b\u7684\u989c\u8272",colorByFieldValue:"\u6309\u5b57\u6bb5\u503c\u5206\u7c7b\u7684\u989c\u8272",xAxisTitle:"X \u8f74\u6807\u9898",xAxisHintText:"\u63d0\u793a: X \u8f74\u6807\u9898",yAxisTitle:"Y \u8f74\u6807\u9898",yAxisHintText:"\u63d0\u793a: Y \u8f74\u6807\u9898",fieldColorLabel:"\u6807\u6ce8",fieldColorColor:"\u989c\u8272",defaultFieldSelectLabel:"\u9009\u62e9",errMsgFieldValuesNotFound:"\u65e0\u6cd5\u627e\u5230\u6240\u9009\u5b57\u6bb5\u7684\u503c",errMsgSectionTitle:"\u8bf7\u8f93\u5165\u7ae0\u8282\u6807\u9898",
errMsgFieldByValue:"\u8bf7\u6309\u5b57\u6bb5\u503c\u9009\u62e9\u989c\u8272",errMsgDataSeriesField:"\u8bf7\u9009\u62e9\u503c\u5b57\u6bb5",settingTabTitle:"\u8bbe\u7f6e",layoutTabTitle:"\u5e03\u5c40",polarChartSelectFieldsHintText:"\u63d0\u793a: \u9009\u62e9\u5b57\u6bb5\u4ee5\u751f\u6210\u6781\u5750\u6807\u56fe",visibilityText:"\u53ef\u89c1\u6027",fieldNameText:"\u5b57\u6bb5\u540d",aliasNameText:"\u522b\u540d",errMsgPolarFieldsRequired:"\u8bf7\u9009\u62e9\u4e09\u4e2a\u6216\u66f4\u591a\u7684\u5b57\u6bb5\u4ee5\u751f\u6210\u6781\u5750\u6807\u56fe",
polarChartPolygonFillLabel:"\u586b\u5145\u9762",polarChartPolygonFillHintText:"\u63d0\u793a: \u9009\u62e9\u590d\u9009\u6846\u4ee5\u663e\u793a\u586b\u5145\u6781\u5750\u6807\u56fe\u7684\u9762",viewLayoutLabel:"\u5e03\u5c40",setValueFields:"\u8bbe\u7f6e\u503c\u5b57\u6bb5",layoutSeriesLabel:"\u7cfb\u5217",ThemeSelector:{themeAdobebricks:"Adobebricks",themeAlgae:"Algae",themeBahamation:"Bahamation",themeBlueDusk:"BlueDusk",themeCubanShirts:"CubanShirts",themeDesert:"Desert",themeDistinctive:"Distinctive",
themeDollar:"Dollar",themeGrasshopper:"Grasshopper",themeGrasslands:"Grasslands",themeGreySkies:"GreySkies",themeHarmony:"Harmony",themeIndigoNation:"IndigoNation",themeIreland:"Ireland",themeMiamiNice:"MiamiNice",themeMinty:"Minty",themePurpleRain:"PurpleRain",themeRoyalPurples:"RoyalPurples",themeSageToLime:"SageToLime",themeTufte:"Tufte",themeWatersEdge:"WatersEdge",themeWetlandText:"Wetland",themePlotKitblue:"PlotKit.blue",themePlotKitcyan:"PlotKit.cyan",themePlotKitgreen:"PlotKit.green",themePlotKitorange:"PlotKit.orange",
themePlotKitpurple:"PlotKit.purple",themePlotKitred:"PlotKit.red"}},GeneralSetting:{legendGeneralSettingText:"\u5e38\u89c4\u8bbe\u7f6e",locationSymbolLabel:"\u56fe\u5f62\u4f4d\u7f6e\u7b26\u53f7",locationSymbolHintText:"\u63d0\u793a: \u7528\u4e8e\u663e\u793a\u5730\u5740\u7b26\u53f7\u548c\u5355\u51fb\u4f4d\u7f6e",refreshIntervalLabel:"\u5237\u65b0\u95f4\u9694",refreshIntervalHintText:"\u63d0\u793a: \u7528\u4e8e\u6839\u636e\u6b64\u95f4\u9694\u5237\u65b0\u56fe\u8868\u3002\u8bf7\u5728 1 \u5230 1440 \u5206\u949f\u7684\u533a\u95f4\u5185\u6307\u5b9a\u4e00\u4e2a\u503c",
errMsgRefreshInterval:"\u8bf7\u5728 0 \u5230 1440 \u5206\u949f\u7684\u533a\u95f4\u5185\u6307\u5b9a\u5237\u65b0\u95f4\u9694",symbolPickerPreviewText:"\u9884\u89c8:",showToolToSelectLabel:"\u8bbe\u7f6e\u4f4d\u7f6e\u6309\u94ae",showToolToSelectHintText:"\u63d0\u793a\uff1a\u8bf7\u63d0\u4f9b\u8981\u5728\u5730\u56fe\u4e0a\u8bbe\u7f6e\u5730\u70b9\u7684\u6309\u94ae\uff0c\u800c\u4e0d\u662f\u59cb\u7ec8\u5728\u70b9\u51fb\u5730\u56fe\u65f6\u8bbe\u7f6e\u5730\u70b9"},searchSourceSetting:{searchSourceSettingTabTitle:"\u641c\u7d22\u6e90\u8bbe\u7f6e",
searchSourceSettingTitle:"\u641c\u7d22\u6e90\u8bbe\u7f6e",searchSourceSettingTitleHintText:"\u6dfb\u52a0\u5e76\u5c06\u5730\u7406\u7f16\u7801\u670d\u52a1\u6216\u8981\u7d20\u56fe\u5c42\u914d\u7f6e\u4e3a\u641c\u7d22\u6e90\u3002\u8fd9\u4e9b\u6307\u5b9a\u7684\u6e90\u51b3\u5b9a\u4e86\u641c\u7d22\u6846\u4e2d\u7684\u53ef\u641c\u7d22\u5185\u5bb9",addSearchSourceLabel:"\u6dfb\u52a0\u641c\u7d22\u6e90",featureLayerLabel:"\u8981\u7d20\u56fe\u5c42",geocoderLabel:"\u5730\u7406\u7f16\u7801\u5668",nameTitle:"\u540d\u79f0",
generalSettingLabel:"\u5e38\u89c4\u8bbe\u7f6e",allPlaceholderLabel:"\u7528\u4e8e\u641c\u7d22\u5168\u90e8\u5185\u5bb9\u7684\u5360\u4f4d\u7b26\u6587\u672c\uff1a",allPlaceholderHintText:"\u63d0\u793a\uff1a\u641c\u7d22\u6240\u6709\u56fe\u5c42\u548c\u5730\u7406\u7f16\u7801\u5668\u65f6\u8bf7\u8f93\u5165\u8981\u663e\u793a\u4e3a\u5360\u4f4d\u7b26\u7684\u6587\u672c",generalSettingCheckboxLabel:"\u663e\u793a\u5df2\u627e\u5230\u8981\u7d20\u6216\u4f4d\u7f6e\u7684\u5f39\u51fa\u7a97\u53e3",countryCode:"\u56fd\u5bb6\u6216\u533a\u57df\u4ee3\u7801",
countryCodeEg:"\u4f8b\u5982 ",countryCodeHint:"\u5c06\u6b64\u503c\u7559\u7a7a\u53ef\u641c\u7d22\u6240\u6709\u56fd\u5bb6\u548c\u5730\u533a",questionMark:"?",searchInCurrentMapExtent:"\u4ec5\u5728\u5f53\u524d\u5730\u56fe\u8303\u56f4\u5185\u641c\u7d22",zoomScale:"\u7f29\u653e\u6bd4\u4f8b",locatorUrl:"\u5730\u7406\u7f16\u7801\u5668 URL",locatorName:"\u5730\u7406\u7f16\u7801\u5668\u540d\u79f0",locatorExample:"\u793a\u4f8b",locatorWarning:"\u4e0d\u652f\u6301\u6b64\u7248\u672c\u7684\u5730\u7406\u7f16\u7801\u670d\u52a1\u3002\u8be5\u5fae\u4ef6\u652f\u6301 10.0 \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u5730\u7406\u7f16\u7801\u670d\u52a1\u3002",
locatorTips:"\u7531\u4e8e\u5730\u7406\u7f16\u7801\u670d\u52a1\u4e0d\u652f\u6301\u5efa\u8bae\u529f\u80fd\uff0c\u56e0\u6b64\u5efa\u8bae\u4e0d\u53ef\u7528\u3002",layerSource:"\u56fe\u5c42\u6e90",setLayerSource:"\u8bbe\u7f6e\u56fe\u5c42\u6e90",setGeocoderURL:"\u8bbe\u7f6e\u5730\u7406\u7f16\u7801\u5668 URL",searchLayerTips:"\u7531\u4e8e\u8981\u7d20\u670d\u52a1\u4e0d\u652f\u6301\u5206\u9875\u529f\u80fd\uff0c\u56e0\u6b64\u5efa\u8bae\u4e0d\u53ef\u7528\u3002",placeholder:"\u5360\u4f4d\u7b26\u6587\u672c",searchFields:"\u641c\u7d22\u5b57\u6bb5",
displayField:"\u663e\u793a\u5b57\u6bb5",exactMatch:"\u5b8c\u5168\u5339\u914d",maxSuggestions:"\u6700\u5927\u5efa\u8bae\u6570",maxResults:"\u6700\u5927\u7ed3\u679c\u6570",enableLocalSearch:"\u542f\u7528\u672c\u5730\u641c\u7d22",minScale:"\u6700\u5c0f\u6bd4\u4f8b",minScaleHint:"\u5982\u679c\u5730\u56fe\u6bd4\u4f8b\u5927\u4e8e\u6b64\u6bd4\u4f8b\uff0c\u5c06\u4f7f\u7528\u672c\u5730\u641c\u7d22",radius:"\u534a\u5f84",radiusHint:"\u6307\u5b9a\u4ee5\u5f53\u524d\u5730\u56fe\u4e2d\u5fc3\u4e3a\u4e2d\u5fc3\u7684\u533a\u57df\u534a\u5f84\uff0c\u7528\u4e8e\u63d0\u5347\u5730\u7406\u7f16\u7801\u5019\u9009\u9879\u7684\u7b49\u7ea7\uff0c\u4ee5\u4fbf\u5148\u8fd4\u56de\u8ddd\u79bb\u4f4d\u7f6e\u6700\u8fd1\u7684\u5019\u9009\u9879",
meters:"\u7c73",setSearchFields:"\u8bbe\u7f6e\u641c\u7d22\u5b57\u6bb5",set:"\u8bbe\u7f6e",fieldName:"\u540d\u79f0",invalidSearchSources:"\u641c\u7d22\u6e90\u8bbe\u7f6e\u65e0\u6548",invalidUrlTip:"URL ${URL} \u65e0\u6548\u6216\u4e0d\u53ef\u8bbf\u95ee\u3002",maxSuggestionErrorMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6700\u5927\u5efa\u8bae\u503c\u3002 \u8be5\u503c\u8d85\u51fa\u8303\u56f4\u6216\u65e0\u6548\u3002",maxResultsErrorMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6700\u5927\u7ed3\u679c\u503c\u3002 \u8be5\u503c\u8d85\u51fa\u8303\u56f4\u6216\u65e0\u6548\u3002",
zoomScaleErrorMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7f29\u653e\u6bd4\u4f8b\u503c\u3002 \u8be5\u503c\u8d85\u51fa\u8303\u56f4\u6216\u65e0\u6548\u3002",minScaleErrorMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6700\u5c0f\u6bd4\u4f8b\u503c\u3002 \u8be5\u503c\u8d85\u51fa\u8303\u56f4\u6216\u65e0\u6548\u3002",radiusErrorMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u534a\u5f84\u503c\u3002 \u8be5\u503c\u8d85\u51fa\u8303\u56f4\u6216\u65e0\u6548\u3002"},_localized:{}}});