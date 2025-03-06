import { instance } from '@/api/axios';

class PromoService {
  private BASE_URL = '/promo';

  async checkPromo(promo: string) {
    if (!promo) return null;

    return instance.get<null | number>(`${this.BASE_URL}/check/${promo}`);
  }
}

export const promoService = new PromoService();
