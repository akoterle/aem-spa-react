package com.adobe.aem.guides.wkndspa.react.core.models.impl;

import com.adobe.aem.guides.wkndspa.react.core.models.BasicCardModel;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.Optional;

@Model(
        adaptables = {SlingHttpServletRequest.class, Resource.class},
        adapters = {BasicCardModel.class, ComponentExporter.class},
        resourceType = BasicCardModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)

public class BasicCardModelImpl implements BasicCardModel {

    @ValueMapValue
    private String title;
    @ValueMapValue
    private String cardImage;

    @Override
    public String getTitle() {
        return Optional.ofNullable(title).orElse("Configure Me!");
    }

    @Override
    public String getImageUri() {
        return Optional.ofNullable(cardImage).orElse("N/A");
    }

    static final String RESOURCE_TYPE = "wknd-spa-react/components/basiccard";

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
