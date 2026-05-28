const BASE_URL = "https://www.thecolorapi.com";

export const getColor = async (hex) => {
  try {
    const response = await fetch(`${BASE_URL}/id?hex=${hex}`);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    return response.json();
  } catch (error) {
    console.error(error);

    throw error;
  }
};
