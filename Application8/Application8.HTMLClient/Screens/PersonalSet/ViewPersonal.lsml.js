/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPersonal.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Personal.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Personal." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

