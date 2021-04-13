import React, { useState, FC, useMemo, BaseSyntheticEvent } from "react";

type Props = {
  suggestions: string[];
};

type State = {
  activeSuggestion: number;
  filteredSuggestions?: string[];
  showSuggestions?: boolean;
  userInput?: string;
};

const MyAutoCompleteInput: FC<Props> = ({ suggestions }) => {
  const [state, setState] = useState<State>({
    activeSuggestion: 0,
    filteredSuggestions: [] as string[],
    showSuggestions: false,
    userInput: "",
  });
  const onChange = (e: BaseSyntheticEvent) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  const onClick = (e: BaseSyntheticEvent) => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const onKeyDown = (e: any) => {
    const { activeSuggestion, filteredSuggestions } = state;
    if (e.keyCode === 13 && filteredSuggestions?.length) {
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40 && filteredSuggestions?.length) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setState({
        ...state,
        activeSuggestion: activeSuggestion + 1,
      });
    }
  };

  const suggestionsListComponent = useMemo(() => {
    let suggestionsListComponent;
    const {
      activeSuggestion,
      filteredSuggestions,
      showSuggestions,
      userInput,
    } = state;
    if (showSuggestions && userInput) {
      if (filteredSuggestions && filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions absolute -bottom-2 transform translate-y-full bg-gray-400 z-50 w-full">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              return (
                <li
                  className={`${
                    index === activeSuggestion ? "bg-red-300" : ""
                  }`}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }
    return suggestionsListComponent;
  }, [state]);

  return (
    <div className="relative">
      <input
        className="px-2 py-2 border rounded-lg w-full"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={state.userInput}
      />
      {suggestionsListComponent}
    </div>
  );
};

export default MyAutoCompleteInput;
