package com.s2u2m.prod.showme.error;

import lombok.Getter;

/**
 * ShowMeRuntimeException Create on 8/12/19
 *
 * @author Yangyang.xia
 */
@Getter
public class ShowMeRuntimeException extends RuntimeException {
    private ShowMeErrorCode code;

    public ShowMeRuntimeException(ShowMeErrorCode code, String msg) {
        super(msg);
        this.code = code;
    }

    public ShowMeRuntimeException(ShowMeErrorCode code, Throwable cause) {
        super(cause);
        this.code = code;
    }
}
