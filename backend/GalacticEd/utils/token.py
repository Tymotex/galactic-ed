import jwt
from GalacticEd import SECRET_KEY 
from typing import Dict

def generate_token(user_data: Dict[str, str]) -> str:
    """
        Generates a unique JSON web token based on the input user data.

        Args:
            user_data (dict): of shape { 
                    user_id: str,
                    email: str
                }

        Returns:
            str: the JWT web token 
    """
    payload = {
        "user_id": user_data["user_id"],
        "email": user_data["email"],
    }
    web_token = jwt.encode(payload, SECRET_KEY, algorithm="HS256").decode("utf-8")
    return web_token
