package com.s2u2m.prod.showme;

import java.io.File;
import java.io.FileNotFoundException;

import org.springframework.util.ResourceUtils;
import org.springframework.util.StringUtils;

/**
 * BaseTestCase Create on 8/15/19
 *
 * @author Yangyang.xia
 */
public abstract class BaseTestCase {
    protected File getDataInResources(String relPath) throws FileNotFoundException {
        if (StringUtils.isEmpty(relPath)) {
            throw new FileNotFoundException(relPath);
        }

        return ResourceUtils.getFile(String.format("classpath:%s", relPath));
    }
}
