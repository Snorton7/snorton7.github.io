(function(window, undefined) {
  var dictionary = {
    "961a50bd-7bd1-40fd-91c6-1b0ee707137f": "ENTERTAINMENT",
    "a2ddd260-2e47-41fa-b4bc-af187ed08a0f": "RESTAURANTS",
    "53907d28-feca-4f00-964d-073d49ec2686": "FAQ",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "HOME PAGE",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);