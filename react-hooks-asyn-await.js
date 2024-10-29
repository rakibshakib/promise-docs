const usePromiseAsyncAwait = (initialState = []) => {
    const [state, setState] = useState({
        data: initialState,
        error: null,
        loading: false,
    });

    const makeRequest = async ({
        method = "post",
        url,
        params,
        payload,
        onSuccess,
        onError,
        isForm,
    }) => {
        setState((prevState) => ({ ...prevState, loading: true, error: null }));
        try {
            const response = await axios({
                method: method,
                url,
                data: payload,
                params: params,
            });
    
            setState((prevState) => ({
                ...prevState,
                loading: false,
                data: response.data,
            }));
            onSuccess?.(response.data);
        } catch (error) {
            if (typeof onError === "function") {
                onError?.(error);
            } 
            setState((prevState) => ({
                ...prevState,
                loading: false,
                error: error,
            }));
        }
    };

    // Reset the state to initial state
    const reset = () => {
        setState(() => ({
            data: initialState,
            error: null,
            loading: false,
        }));
    };
    return {
        ...state,
        setState,
        pending: state.loading,
        action: makeRequest,
        reset,
    };
};

export default usePromiseAsyncAwait;