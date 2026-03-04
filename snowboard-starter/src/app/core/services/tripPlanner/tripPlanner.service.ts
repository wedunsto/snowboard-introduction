import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { TripPlannerRequest, TripPlannerResponse } from "../../models/tripPlanner/tripPlanner.model";

@Injectable({ providedIn: 'root'})
export class TripPlannerService {
    private http = inject(HttpClient);
    private base = environment.apiBaseUrl;
    private createTripPlanEndpoint = environment.endpoints.createTrip;

    /**
     * Create a new trip plan
     * @returns response code
     */
    public createTripPlan(payload: TripPlannerRequest): Observable<TripPlannerResponse> {
        return this.http.post<TripPlannerResponse>(
            `${this.base}${this.createTripPlanEndpoint}`,
            payload
        );
    }
}