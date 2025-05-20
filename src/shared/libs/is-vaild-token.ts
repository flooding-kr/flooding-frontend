function isValidToken({
  accessToken,
  refreshToken,
}: {
  accessToken?: string;
  refreshToken?: string;
}): {
  isAccessTokenValid?: boolean;
  isRefreshTokenValid?: boolean;
} {
  const currentTime = Math.floor(Date.now() / 1000);
  const result: {
    isAccessTokenValid?: boolean;
    isRefreshTokenValid?: boolean;
  } = {};

  const decode = (token: string) =>
    JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf-8'));

  try {
    if (accessToken) {
      const payload = decode(accessToken);
      result.isAccessTokenValid = payload.exp > currentTime;
    }
    if (refreshToken) {
      const payload = decode(refreshToken);
      result.isRefreshTokenValid = payload.exp > currentTime;
    }
  } catch (error) {
    console.error('토큰 디코딩 실패:', error);
  }

  return result;
}

export default isValidToken;
