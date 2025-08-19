export const FETCH_SERVICINGS_REQUEST = "FETCH_SERVICINGS_REQUEST";
export const FETCH_SERVICINGS_SUCCESS = "FETCH_SERVICINGS_SUCCESS";
export const FETCH_SERVICINGS_FAILURE = "FETCH_SERVICINGS_FAILURE";

export const CREATE_SERVICING_REQUEST = "CREATE_SERVICING_REQUEST";
export const CREATE_SERVICING_SUCCESS = "CREATE_SERVICING_SUCCESS";
export const CREATE_SERVICING_FAILURE = "CREATE_SERVICING_FAILURE";

// Fetch servicing for car
export const fetchServicingsRequest = (carId) => ({ type: FETCH_SERVICINGS_REQUEST, payload: carId });
export const fetchServicingsSuccess = (servicings) => ({ type: FETCH_SERVICINGS_SUCCESS, payload: servicings });
export const fetchServicingsFailure = (error) => ({ type: FETCH_SERVICINGS_FAILURE, payload: error });

// Create servicing entry
export const createServicingRequest = (servicing) => ({ type: CREATE_SERVICING_REQUEST, payload: servicing });
export const createServicingSuccess = () => ({ type: CREATE_SERVICING_SUCCESS });
export const createServicingFailure = (error) => ({ type: CREATE_SERVICING_FAILURE, payload: error });
