/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPolyclinics.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Polyclinics.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Polyclinics." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

