export interface TripPlannerRequest {
    destination: string;
    arrivalDate: Date;
    departureDate: Date;
    budget: number
}

export interface TripPlannerResponse {
    id: number;
    destination: string;
    arrivalDate: Date;
    departureDate: Date;
    budget: number;
    completed: boolean
}
