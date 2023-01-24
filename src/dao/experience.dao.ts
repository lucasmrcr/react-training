const endpoint = 'http://localhost:8080/experiences';

export type ExperienceDTO = {
  id: string
  name: string
  host: string
  period: string
  image: string
}

export function getExperiences(): Promise<ExperienceDTO[]> {
  return fetch(endpoint).then(response => response.json());
}