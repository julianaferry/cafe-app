import { resetClient, Client } from '../Client';

const selectedProjectCookieName = 'ProjectId';
const projectConfigurationPath = '/Admin/Configuration';

const defaultProjectId = 'b61a77df-b2e3-0095-a454-64ffc39d06d3';

const getSampleProjectItems = (projectId = defaultProjectId) => {
  resetClient(projectId);

  return Client.items()
    .elementsParameter(['id'])
    .depthParameter(0)
    .getObservable();
}

export {
  selectedProjectCookieName,
  projectConfigurationPath,
  defaultProjectId,
  getSampleProjectItems
};
