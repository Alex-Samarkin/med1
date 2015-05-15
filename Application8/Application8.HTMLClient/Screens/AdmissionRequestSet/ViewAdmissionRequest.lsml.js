/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewAdmissionRequest.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.AdmissionRequest.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.AdmissionRequest." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

