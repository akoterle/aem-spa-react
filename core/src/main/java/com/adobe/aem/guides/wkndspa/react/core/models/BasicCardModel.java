package com.adobe.aem.guides.wkndspa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface BasicCardModel extends ComponentExporter {
    String getTitle();

    String getImageUri();
}
