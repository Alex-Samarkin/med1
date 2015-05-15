/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProfessionList.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProfessionList.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProfessionList." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

