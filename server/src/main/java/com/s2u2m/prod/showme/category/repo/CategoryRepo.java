package com.s2u2m.prod.showme.category.repo;

import java.util.Collection;

public interface CategoryRepo {

    Collection<LabelStatistic> getLabels(String category);
}
