function FindNeedle (haystack, needle) {
    // Your code here:
    const index = haystack.indexOf(needle)

    if (index !== -1) return index
    else return -1
  }

  console.log(FindNeedle('react-redux', 'cualquiercosa'));

  