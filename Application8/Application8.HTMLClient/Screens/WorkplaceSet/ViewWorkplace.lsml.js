/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewWorkplace.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Workplace.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Workplace." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

