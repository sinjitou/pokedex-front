const serverUrl = process.env.SERVER_URL;

type ApiReqParams = {
  path: string;
  body?: any;
  login?: {
    username: string;
    password: string;
  };
  method: string;
};

export async function apiRequest({ path, body, login, method }: ApiReqParams) {
  const { username, password } = login || {};
  const auth = btoa(`${username}:${password}`);
  const url = serverUrl + path;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify(body),
  };

  try {
    return await fetch(url, options);
  } catch (error: any) {
    console.log(error);
    return { status: error?.response?.status || 400 };
  }
}
