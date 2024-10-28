const useAxiosAPI = (initialState = []) => {
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
        isToast,
        onSuccess,
        onError,
        isForm,
        customSuccessMsg = null,
        customErrorMsg = null,
    }) => {
        setState((prevState) => ({ ...prevState, loading: true, error: null }));
        try {
            const response = await axios({
                method: method,
                url,
                data: isForm ? objectToForm(payload) : payload,
                params: params,
            });
            isToast &&
                toast.success(
                    t(customSuccessMsg) ||
                        response?.data?.message ||
                        t("Saved Successfully")
                );
            setState((prevState) => ({
                ...prevState,
                loading: false,
                data: response.data,
            }));
            onSuccess?.(response.data);
        } catch (error) {
            if (typeof onError === "function") {
                onError?.(error);
            } else {
                isToast &&
                    toast.error(
                        error?.response?.data?.message ||
                            error?.message ||
                            t(customErrorMsg) ||
                            t("Something went wrong")
                    );
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

export default useAxiosAPI;