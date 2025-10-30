// hooks/tenant/useUpdateTenantTierLimits.ts
import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';

interface UpdateTierLimitsPayload {
  tenantId: number;
  limits: {
    maxAccounts?: number;
    maxSKUs?: number;
    maxConcurrentUsers?: number;
    expirationDate?: string | null;
  };
   
}

export const useUpdateTenantTierLimits = () => {
  return useMutation({
    mutationFn: async ({ tenantId, limits }: UpdateTierLimitsPayload) => {
      const response = await api.put(
        `/tenants/${tenantId}/tier-limits`,
        limits,
      );
      return response.data;
    },
  });
};