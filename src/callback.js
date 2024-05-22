function callback() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  return <div>{code}</div>;
}

export default callback;
