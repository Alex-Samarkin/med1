/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewShedulesItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ShedulesItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ShedulesItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

