function renderData(moduleName, data) {
  console.log(moduleName, data);
}

function renderError(message) {
  console.log('Error', message);
}

export { renderData, renderError };
