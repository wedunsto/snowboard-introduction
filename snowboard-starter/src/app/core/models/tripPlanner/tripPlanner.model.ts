export interface TripPlannerRequest {
    destination: string;
    arrivalDate: Date;
    departureDate: Date;
    budget: number
}

export interface TripPlannerResponse {
    destination: string;
    arrivalDate: Date;
    departureDate: Date;
    budget: number
}
