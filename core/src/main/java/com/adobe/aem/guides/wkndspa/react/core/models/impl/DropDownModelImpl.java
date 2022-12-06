package com.adobe.aem.guides.wkndspa.react.core.models.impl;

import com.adobe.aem.guides.wkndspa.react.core.models.DropDownModel;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.Optional;

// Sling Model annotation
@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {DropDownModel.class, ComponentExporter.class},
        resourceType = DropDownModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter( //Exporter annotation that serializes the modoel as JSON
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class DropDownModelImpl implements DropDownModel {

    @ValueMapValue
    private String label;

    @Override
    public String getLabel() {
        return Optional.ofNullable(label).orElse("N/A");
    }

    static final String RESOURCE_TYPE = "wknd-spa-react/components/dropdown";


    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
