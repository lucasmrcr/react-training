const endpoint = 'http://localhost:8080/experiences';

export type ExperienceDTO = {
  id?: string
  name: string
  host: string
  period: string
  image: string
}

export function getExperiences(): Promise<ExperienceDTO[]> {
  return fetch(endpoint).then(response => response.json());
}

export function saveExperience(experience: ExperienceDTO): Promise<ExperienceDTO> {
  return fetch(endpoint, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(experience)}).then(response => response.json());
}