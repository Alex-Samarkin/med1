/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewManager.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Manager.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Manager." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

