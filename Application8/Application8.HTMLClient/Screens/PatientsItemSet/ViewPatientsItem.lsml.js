/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPatientsItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.PatientsItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.PatientsItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

