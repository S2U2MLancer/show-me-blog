package com.s2u2m.prod.showme.category.repo;

import com.s2u2m.prod.showme.error.ShowMeErrorCode;
import com.s2u2m.prod.showme.error.ShowMeRuntimeException;
import com.s2u2m.prod.showme.integration.es.article.ArticleEsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.Collection;
import java.util.stream.Collectors;

@Repository
public class CategoryRepoImpl implements CategoryRepo {

    @Autowired
    private ArticleEsRepo articleEsRepo;

    @Override
    public Collection<LabelStatistic> getLabels(String category) {
        try {
            var labelStatistic = articleEsRepo.getLabelStatistic(category);
            return labelStatistic.entrySet().stream()
                    .map(entry -> LabelStatistic.builder()
                            .label(entry.getKey())
                            .articleAmount(entry.getValue())
                            .build())
                    .collect(Collectors.toList());
        } catch (IOException e) {
            throw new ShowMeRuntimeException(ShowMeErrorCode.EXTERNAL_SERVICE_ERROR, e);
        }
    }
}
