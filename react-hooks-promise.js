
const usePromiseAPI = (initialState = []) => {
    const [state, setState] = useState({
        data: initialState,
        error: null,
        loading: false,
    });

    const makeRequest = ({
        method = "post",
        url,
        params,
        payload,
        isToast = false,
        onSuccess,
        onError,
        isForm = false,
        customSuccessMsg = null,
        customErrorMsg = null,
    }) => {
        // Start loading
        setState(prevState => ({ ...prevState, loading: true, error: null }));

        axios({
            method,
            url,
            data: isForm ? objectToForm(payload) : payload,
            params,
        })
        .then(response => {
            // Success handling
            isToast && toast.success(customSuccessMsg || response?.data?.message || "Saved Successfully");
            setState(prevState => ({
                ...prevState,
                loading: false,
                data: response.data,
            }));
            onSuccess?.(response.data);
        })
        .catch(error => {
            // Error handling
            if (typeof onError === "function") {
                onError(error);
            } else if (isToast) {
                toast.error(
                    error?.response?.data?.message || 
                    error?.message || 
                    customErrorMsg || 
                    "Something went wrong"
                );
            }
            setState(prevState => ({
                ...prevState,
                loading: false,
                error,
            }));
        });
    };

    // Reset the state to initial state
    const reset = () => {
        setState({
            data: initialState,
            error: null,
            loading: false,
        });
    };

    return {
        ...state,
        pending: state.loading,
        action: makeRequest,
        reset,
    };
};

export default usePromiseAPI;
