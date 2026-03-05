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
    private getTripPlansEndpoint = environment.endpoints.getTrips;

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

    /**
     * Get all trip plans
     * @returns an an array of all trip plans
     */
    public getTripPlans(): Observable<TripPlannerResponse[]> {
        return this.http.get<TripPlannerResponse[]>(
            `${this.base}${this.getTripPlansEndpoint}`
        );
    }
}