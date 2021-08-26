import { Observable } from "rxjs";

export interface IRepeats {
    repeats: number;
}

export interface IResponse {
    repeats: number;
    message: string;
}

export interface IPongService {
    pong(repeats: IRepeats): Observable<IResponse>;
}
