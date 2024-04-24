// @ts-nocheck

import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import dateTypes from '../constants/date-types';
import CustomNode from '../components/CustomNode';

const nodeTypes = {
  card: CustomNode,
};

const getLabelsByIds = (options, ids) => {
  const labels = [];

  const findLabels = (opts) => {
    for (const option of opts) {
      if (ids.includes(option.id)) {
        labels.push(option.label);
      }
      if (option.options) {
        findLabels(option.options);
      }
    }
  };

  findLabels(options);
  return labels;
};

function DateCardAnswers({ answerIds }) {
  const answerLabels = getLabelsByIds(dateTypes[0].options, answerIds);
  const initialNodes = [
    {
      id: '1',
      data: {
        id: answerIds[0],
        label: answerLabels[0],
      },
      position: { x: -450, y: -150 },
      type: 'card',
    },
    {
      id: '2',
      data: {
        id: answerIds[1],
        label: answerLabels[1],
      },
      position: { x: 0, y: 0 },
      type: 'card',
    },
    {
      id: '3',
      data: {
        id: answerIds[2],
        label: answerLabels[2],
      },
      position: { x: 450, y: 150 },
      type: 'card',
    },
  ];

  const initialEdges = [
    { id: '1-2', source: '1', target: '2', type: 'step' },
    { id: '2-3', source: '2', target: '3', type: 'step' },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Controls />
    </ReactFlow>
  );
}

export default DateCardAnswers;
