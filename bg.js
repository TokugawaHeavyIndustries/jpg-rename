(function(){
    var expr = /\.jpeg|\.jfif/;

    chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest){
        if (expr.test(downloadItem.filename)) {
            suggest({filename: downloadItem.filename.replace(/\.jpeg|\.jfif/, '.jpg')})
        }
    });
})();

