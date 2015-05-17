﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewAdmissionRegistered.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.AdmissionRegistered.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.AdmissionRegistered." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

