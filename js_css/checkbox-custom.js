// ✅ Setting checked property
(() => {
    const selectAllCheckbox = document.getElementById("correct-select-all");
    const childCheckboxes = document.querySelectorAll(".correct-child-checkbox");
  
    const toggleSelectAllCheckbox = () => {
      const areAllChecked = [...childCheckboxes].every((c) => c.checked === true);
      childCheckboxes.forEach((c) => {
        c.checked = !areAllChecked;
      });
      selectAllCheckbox.checked = !areAllChecked;
    };
  
    selectAllCheckbox.addEventListener("click", toggleSelectAllCheckbox);
  
    // Handle child click events
    const toggleChildCheckbox = () => {
      const areAllChecked = [...childCheckboxes].every((c) => c.checked === true);
      selectAllCheckbox.checked = areAllChecked;
    };
  
    childCheckboxes.forEach((c) => {
      c.addEventListener("click", toggleChildCheckbox);
    });
  })();