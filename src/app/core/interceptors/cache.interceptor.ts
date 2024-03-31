import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http"
import { Observable} from "rxjs/internal/Observable"
import { map } from "rxjs/internal/operators/map"
import { of } from "rxjs"



const CACHED_DATA: any = {};
export const CacheInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const REQ_CLONSE = req.clone({
    headers: req.headers.set('Accept-Encoding','gzip, compress, br')
  })

  if(req.method != "GET"){
    return next(REQ_CLONSE);
  }

  if(CACHED_DATA[req.urlWithParams]){
    return of(CACHED_DATA[req.urlWithParams]);
  } else {
    return next(REQ_CLONSE).pipe(
      map((payload: any) => {
        CACHED_DATA[req.urlWithParams] = payload;
        return payload
      })
    );
  }
};
