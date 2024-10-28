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
    onSuccess,
    onError,
  }) => {
    // Start loading
    setState((prevState) => ({ ...prevState, loading: true, error: null }));

    axios({
      method,
      url,
      data: payload,
      params,
    })
      .then((response) => {
        // Success handling
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data: response.data,
        }));
        onSuccess?.(response.data);
      })
      .catch((error) => {
        // Error handling
        if (typeof onError === "function") {
          onError(error);
        }
        // error handling
        setState((prevState) => ({
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
