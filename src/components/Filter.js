import { useState } from 'react';

const Filter = ({filteration}) => {
  const [filter, setFilter] = useState('');
  const filterHandler = (e) => {
    const title = e.target.value
    setFilter(title)
    filteration(title)
  };

  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="search for title"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
