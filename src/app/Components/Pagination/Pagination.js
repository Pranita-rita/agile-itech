import * as React from 'react';

import * as imports from "../../utils/Imports"

export default function CustomIcons() {
  return (
    <imports.Stack spacing={2}>
      <imports.Pagination
        count={10}
        renderItem={(item) => (
          <imports.PaginationItem
            slots={{ previous: imports.ArrowBackIcon, next: imports.ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </imports.Stack>
  );
}