package com.s2u2m.prod.showme.integration.es;

import lombok.Getter;
import lombok.Setter;
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.Collection;
import java.util.stream.Collectors;

@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "s2u2m.es")
public class EsConfig {

    private Collection<String> nodes;

    public RestHighLevelClient getEsClient() {
        HttpHost[] hosts = this.nodes.stream()
                .map(HttpHost::create)
                .collect(Collectors.toList())
                .toArray(new HttpHost[]{});
        RestHighLevelClient client = new RestHighLevelClient(RestClient.builder(hosts));
        return client;
    }
}
