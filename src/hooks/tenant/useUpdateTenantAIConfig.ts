// hooks/tenant/useUpdateTenantAIConfig.ts
import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';

interface UpdateTenantAIPayload {
  tenantId: number;
  aiConfig: {
    aiChatEnabled?: boolean;
    aiProvider?: string;
    aiModel?: string;
    aiSystemPrompt?: string;
    aiTemperature?: number;
    aiMaxTokens?: number;
    aiAutoReplyDelay?: number;
    apiKey?: string; // Thêm trường apiKey
  };
}

export const useUpdateTenantAIConfig = () => {
  return useMutation({
    mutationFn: async ({ tenantId, aiConfig }: UpdateTenantAIPayload) => {
      const response = await api.put(
        `/tenants/${tenantId}/ai-config`, 
        aiConfig
      );
      return response.data;
    },
  });
};
