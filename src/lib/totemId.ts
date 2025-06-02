// Função para gerar um hash usando Web Crypto API
const generateHash = async (str: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export const generateTotemId = async (): Promise<string> => {
  // Coleta informações do ambiente
  const userAgent = navigator.userAgent;
  const screenInfo = `${window.screen.width}x${window.screen.height}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = navigator.language;
  
  // Combina as informações
  const machineInfo = `${userAgent}|${screenInfo}|${timezone}|${language}`;
  
  // Gera um hash
  const hash = await generateHash(machineInfo);
  
  // Retorna os primeiros 8 caracteres do hash
  return hash.substring(0, 8);
};

// Função para obter o ID do totem (salva no localStorage para persistência)
export const getTotemId = async (): Promise<string> => {
  const storageKey = 'totem_id';
  let totemId = localStorage.getItem(storageKey);
  
  if (!totemId) {
    totemId = await generateTotemId();
    localStorage.setItem(storageKey, totemId);
  }
  
  return totemId;
}; 